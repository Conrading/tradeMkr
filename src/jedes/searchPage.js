
import { useEffect, useState } from "react";
import style from './SearchPage.module.scss'


function SearchPage () {
    const [searchTextInput, setSearchTextInput] = useState(null)
    useEffect (() => {
        window.addEventListener("keydown", searchTextUpdate);
        return () => {
            window.removeEventListener("keydown", searchTextUpdate);
        };
    }, [searchTextUpdate])
    const cx = (...classNames) => classNames.join(' ');
    function searchTextUpdate (e) {
        setSearchTextInput(e.target.value)
        if (e.key === "Enter")  {
            e.preventDefault()
            alert("search key word is: " + searchTextInput)
        }
    }
    return (
    <div>
        <div >
            <div className={style.searchbarFrame}>
                <div>
                    <input className={style.searchbarInputProject} type="text" 
                    id="searchTextClickInput"
                    placeholder="type to search..."
                    onChange={e => searchTextUpdate(e)} />
                </div>
            </div>
        <br />
            <div className={style.searchResultFrame}>
                <div className={style.searchCardFrame}>
                    <div className={style.searchResultCard}>
                        <div className={style.searchResultInRow}>
                            <div className={style.searchResultJedesInfor}>Mark: </div>
                            <div className={cx(style.searchResultRowData, style.textPointer)} onClick={() => {window.location = "https://www3.wipo.int/madrid/monitor/en/showData.jsp?ID=BRN:5716088"}}>COCOON</div>
                        </div>
                        <div className={style.searchResultInRow}>
                            <div className={style.searchResultJedesInfor}>Holder: </div>
                            <div className={style.searchResultRowData}>Visibelle Derma Institute, Inc.</div>
                        </div>
                        <div className={style.searchResultInRow}>
                            <div className={style.searchResultJedesInfor}>Country: </div>
                            <div className={style.searchResultRowData}>US</div>
                        </div>
                        <div className={style.searchResultInRow}>
                            <div className={style.searchResultJedesInfor}>Classification: </div>
                            <div className={style.searchResultRowData}>11</div>
                        </div>
                        <div className={style.searchResultInRow}>
                            <div className={style.searchResultJedesInfor}>Application Number: </div>
                            <div className={style.searchResultRowData}>87278915</div>
                        </div>
                        <div className={style.searchResultInRow}>
                            <div className={style.searchResultJedesInfor}>Application Date: </div>
                            <div className={style.searchResultRowData}>22.12.2016</div>
                        </div>
                        <div className={style.searchResultInRow}>
                            <div className={style.searchResultJedesInfor}>Registration Number: </div>
                            <div className={style.searchResultRowData}>5716088</div>
                        </div>
                        <div className={style.searchResultInRow}>
                            <div className={style.searchResultJedesInfor}>Registration Date: </div>
                            <div className={style.searchResultRowData}>02.04.2019</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default SearchPage