import React, { useEffect, useState } from "react";
import style from './MainPage.module.scss'
import './MainPage.scss'
//import http from './http-axios'
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
    let loadGraphicWork = loadDefault.jedesState.map(h => {
      //const cx = (...classNames) => classNames.join(' ');
      if (stateName !== null) {
        let jsonobject = JSON.parse(stateName)
        let populationNumer = jsonobject.map(f => {
          if(f.name === h.geography) {
            let dividedNumer = (h.number / f.population)
            var obg = 1000 * (dividedNumer.toFixed(5))
            var contry = parseInt(obg) + "px"
            /*var elem = document.getElementById('para');
            elem.style.width = obg.toFixed(1) + "px";*/
            return (
              <div>
                <div className="homePageBarName" >{h.geography} has index: {obg.toFixed(1)}</div>
                <div className="homePageBarItself" style={{width: contry.toString()}}>.</div>
              </div>
            )
          } 
        })
        return (
          <div>
            <div>{populationNumer}</div>
          </div>
        )
      }
    })
    return (
        <div className={style.homePageFrame}>
            <div className={style.homePageTitle}>Trademark the world</div>
            <div className={style.homePageFrameGrid}>{loadInitialFile}</div>
            <div className={style.homePageGraphicArea}>
              <div className={style.homePageStatisticsTitle}>- Mark Statistics -</div>
              <div>{loadGraphicWork}</div>
            </div>
        </div>
    )
}

export default MainPage