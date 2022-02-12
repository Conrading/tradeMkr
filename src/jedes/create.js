import { useEffect, useState } from "react";
import style from './Creating.module.scss'

function Creating () {
    const [tradeMkrTitle, setTradeMkrTitle] = useState(null)
    const [tradeMkrUrl, setTradeMkrUrl] = useState(null)
    const [tradeMkrRemark, setTradeMkrRemark] = useState(null)
    const cx = (...classNames) => classNames.join(' ');
    return (
        <div>
            <div className={style.dataUpdateTitleFrame}>- Add the trademark information here into database -</div>
            <div className={style.dataUpdateInputFrame}>
                <div className={style.dataUpdateInRow}>
                    <div className={style.dataUpdateInputDataObject}>Trademark Name</div>
                    <input onChange={(e) => {setTradeMkrTitle(e)}} className={style.dataUpdateInputDataContent}/>
                </div>
                <div className={style.dataUpdateInRow}>
                    <div className={style.dataUpdateInputDataObject}>Trademark Link</div>
                    <input onChange={(e) => {setTradeMkrUrl(e)}} className={style.dataUpdateInputDataContent}/>
                </div>
                <div className={style.dataUpdateInRow}>
                    <div className={style.dataUpdateInputDataObject}>Remark</div>
                    <textarea onChange={(e) => {setTradeMkrRemark(e)}} className={cx(style.dataUpdateInputDataContent, style.dataUpdateInputDataObject)}/>
                </div>
                <div className={style.dataUpdateInRow}>
                    <div className={style.dataUpdateTitleFrame}>here we can add any information, just list what you want to add, I can add here</div>
                </div>
            </div>
            <div className={style.dataUpdateSubmit}>Update</div>
        </div>
    )
}

export default Creating