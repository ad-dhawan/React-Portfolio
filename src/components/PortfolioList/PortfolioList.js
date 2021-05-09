import React from 'react'
import "./PortfolioList.scss"

const PortfolioList = ({id, title, active, setSelected}) => {
    return (
        <li class={active ? "portfolioList active" : "portfolioList"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}

export default PortfolioList
