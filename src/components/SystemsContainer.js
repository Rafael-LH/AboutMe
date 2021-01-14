import React, { useState, useEffect } from 'react'
import OtherSystems from './OtherSystems'
import Systems from './Systems'
import Loading from '../components/Loading'
import ErrorComponent from '../components/Error'

const SystemsContainer = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [numRep, setNumRep] = useState(7);
  const [btnMore, setBtnMore] = useState(true);
  const [showBtnReset, setShowBtnReset] = useState(false);
  const [messageErr, setMessageErr] = useState(null);
  const [isReset, setIsReset] = useState(false);

  const fetchData = async () => {
    let url = 'https://api.github.com/users/Rafael-LH';
    setLoading(true);
    setBtnMore(false);
    try {
      let fetchData = await fetch(url);
      let fetchResponse = await fetchData.json();
      let data = `${fetchResponse.repos_url}?per_page=${numRep}`;
      let responseData = await fetch(data);
      let responseJson = await responseData.json();

      (numRep >= fetchResponse.public_repos) ? setShowBtnReset(true) : setBtnMore(true);
      setData(responseJson);
      setLoading(false);
      setNumRep(numRep + 7);

    } catch (error) {
      setLoading(false);
      setError(true);
      setMessageErr(`El límite de peticiones a la API de github se ha rebasado, espere una hora por favor.`);
      console.log(`Ha ocurrido algun error ${error}`);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (isReset) {
      fetchData();
      setIsReset(false);
    }
  }, [isReset]);
  const resetRepos = () => {
    setIsReset(true);
    setBtnMore(true);
    setNumRep(7);
    setShowBtnReset(false);
  }

  return (
    <>
      <Systems />
      <h1 className="other-systems">Personal projects and practices</h1>
      <div className="container-others-systems">
        {
          data.map(items => <OtherSystems key={items.id} {...items} />)
        }
      </div>
      <div className="container-more-projects">
        {
          loading && <Loading />
        }
        {
          btnMore && <span className="btn-more-projects" onClick={() => fetchData()}>More</span>
        }
        {
          showBtnReset && <span className="btn-more-projects-reset" onClick={() => resetRepos()}>Show Less</span>
        }
      </div>
      {
        error && <ErrorComponent message={messageErr} />
      }
    </>
  )
}
export default SystemsContainer