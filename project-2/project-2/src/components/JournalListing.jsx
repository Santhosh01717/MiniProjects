import { useState } from 'react'
import {data} from './../utils/data'
import Journal from './Journal';
const JournalListing = () => {
    // const [journal , setJournal] = useState(data);
    return (
        <>
          {
            data.map(
                (obj) => (
                    <Journal key={obj.id} data = {obj}/>
                )
            )
          }
        </>
    )
}
export default JournalListing;