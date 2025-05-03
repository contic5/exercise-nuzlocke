
function AccordionElement(props)
{
    const question=props.question;
    const visible=props.visible;
    //        <button onClick={()=>props.handleVisible(props.index)}>+</button>

    let answer="";
    if(visible)
    {
        answer=props.answer;
    }
    return(
        <>
        <div>
        <b>{question}</b>
        <button onClick={()=>props.handleVisible(props.index)}>
        {props.visible ? "-" : "+"}
        </button>
        </div>
        {answer}
        </>
    );
}
export default AccordionElement;