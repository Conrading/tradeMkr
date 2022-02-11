import React, { useEffect, useState } from "react";
import style from './MainPage.module.scss'
import http from './http-axios'
import loadDefault from './jedesMakr.json'


function MainPage () {
    const [stateName, setStateName] = useState(null)
    useEffect(() => {
      async function fetchDataAction () {
        const res = await fetch(`https://restcountries.com/v2/all`);
        const fetchDataJson = await res.json()
        setStateName(JSON.stringify(fetchDataJson))
      }
      fetchDataAction()
    })
    let loadInitialFile = loadDefault.jedesState.map(h => {
      if (stateName !== null) {
        let jsonobject = JSON.parse(stateName)
        //let confirmStateName = jsonobject.filter(g => loadDefault.jedesState.includes(g.name))
        let findOutState = jsonobject.map(f => {
          if(f.name === h.geography) {
            let populationNumer = f.population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
            return (
              <div> 
                <img className={style.homePageImagineSize} src={f.flags.png}  onClick={() => {window.location = `${h.url}`}}/> 
                <div>
                  <div>Population: {populationNumer}</div>
                  <div>Region: {f.subregion}</div>
                </div>
              </div>
            ) 
          } //else {console.log("There is no such country " + f.name)}
        })
        let applicationNumer = h.number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
        return (
          <div className={style.homePageCardFrame}>
            <div className={style.homePageInRow}>
              <div className={style.homePageJedesInfor}>Country:</div>
              <div className={style.homePageJedesRowData}>{h.geography}</div>
            </div>
            <div className={style.homePageInRow}>
              <div className={style.homePageJedesInfor}>Application Numbers:</div>
              <div className={style.homePageJedesRowData}>{applicationNumer}</div>
            </div>
            <div className={style.homePageImagineFrame}>{findOutState}</div>
          </div>
        )
      }
    })
    return (
        <div className={style.homePageFrame}>
            <div className={style.homePageTitle}>Trademark the world</div>
            <div className={style.homePageFrameGrid}>{loadInitialFile}</div>
        </div>
    )
}

export default MainPage