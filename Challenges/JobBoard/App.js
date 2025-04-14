import { use, useEffect, useState } from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

export const App = () => {
  const [jobIds, setJobIds] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/jobstories.json")
      .then((response) => setJobIds(response.data.slice(0, 6)))
      .catch((error) => console.log("Error fetching", error));
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const jobDetails = await Promise.all(
          jobIds.map((id) =>
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          )
        );
        const newJobs = jobDetails.map((res) => res.data);
        setJobs((prevJobs) => {
          const uniqueJobs = [...prevJobs, ...newJobs].reduce((acc, job) => {
            if (!acc.some((existingJob) => existingJob.id === job.id)) {
              acc.push(job);
            }
            return acc;
          }, []);
          return uniqueJobs;
        });
      } catch (error) {
        console.log("Error fetching job details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (jobIds.length > 0) {
      fetchJobs();
    }
  }, [jobIds]);

  return (
    <section>
      <div>
        <div>
          {loading ? (
            <div>
              <ColorRing visible={true} />
            </div>
          ) : (
            <>
              {jobs.map((job) => (
                <div key={job.id}>
                  {job.url ? (
                    <a href={job.url} target="_blank">
                      <strong>{job.title}</strong>{" "}
                    </a>
                  ) : (
                    <strong>{job.title}</strong>
                  )}
                  <p>{`Posted by ${job.by} on ${new Date(
                    job.time * 1000
                  ).toLocaleString()}`}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default App;
