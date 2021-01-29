import RulesBtn from "./RulesBtn/index"
import RulesModal from "./RulesModal/index"

import {useState} from "react"

export default function index() {
    const [ visible, setVisible ] = useState<boolean>(false)
    return (
        <>
            {
                visible ? <RulesModal clickHandler={setVisible} /> : <></>
            }
            <RulesBtn clickHandler={setVisible} />
        </>
    )
}
