import { useEffect, useMemo, useState } from "react";

function getAverage(list){
    console.log('getAverage');
    var sum = 0;
    if(list.length == 0) return sum;
    for (let i = 0; i<list.length; i++){
        sum = sum + list[i];
    }
    return sum / list.length;
}

const Memo = () => {
    const [list, setList] = useState([]);
    const [num, setNum] = useState(0);

    const onChange = e => {
        console.log('onChange');
        setNum(e.target.value);
    }

    const onInsert = e => {
        setList([...list,parseInt(num)]);
        console.log(list);
        setNum(0);
    }

    // const avg = useMemo(()=>getAverage(list), [list]);
    const [avg, setAvg] = useState(0);
    useEffect(()=>{
        setAvg(getAverage(list));
    }, [list]);

    return (
        <div>
            <input value={num} onChange={onChange} />
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((v,i)=>{
                    <li key={i}>{v}</li>
                })}
            </ul>

            <div>
                <b>평균값: {avg}</b>
            </div>
        </div>
    )
}

export default Memo;