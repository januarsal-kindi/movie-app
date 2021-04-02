import React, { PropsWithChildren ,useState ,memo, useEffect } from 'react'


interface FormSearchProps extends PropsWithChildren<any>{
    onClickSubmit:(keyword:string ) => void,
    valueKeyword: string,
}
const FormSearch: React.FunctionComponent<FormSearchProps> = (props) => {
    const [inputValue, setInputValue] = useState<string>('')

    const changeSearchValueHandler = (e :  React.FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    } 

    useEffect(() => {
        setInputValue(props.valueKeyword)
    }, [props.valueKeyword])

    return (
        <>
            <div className="flex -mx-3 my-20 justify-center">
                <div className="w-2/4 px-3 ">
                    <div className="flex">
                        <div className=" w-10 z-10 pl-1 text-center  pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                        <input onChange={changeSearchValueHandler} value={inputValue} type="texxt" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-teal-500" placeholder="Batman" />
                    </div>
                </div>
                <button 
                onClick={()=> props.onClickSubmit(inputValue)} 
                disabled={inputValue.length < 5}
                className="disabled:opacity-50 disabled:cursor-not-allowed w-2/8 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed">
                    Search
                </button>
            </div>
        </>
    )
}
export default memo(FormSearch)
