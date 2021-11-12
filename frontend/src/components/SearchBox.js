import React from 'react'

const SearchBox = ({history}) => {
    const [keyword, setKeyword] = React.useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()){
            history.push(`/search/${keyword}`)
        }else{
            history.push('/')
        }
        console.log(keyword)
    }
    return (
        <>
        {/* <Form className="d-flex" onSubmit={submitHandler} inline>
            <Form.Control className="mr-sm-2 ml-sm-5" type="text" placeholder="Search Products ..." name="q" value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
            <Button className="p-2 " variant="outline-success" type="submit">Search</Button>
            
        </Form> */}
        <form onSubmit={submitHandler} inline>
            <div class="flex items-center justify-center">
            <div class="flex border-2 rounded">
                <input type="text" class="px-4 py-2 w-80" placeholder="Search Products ..." name="q" value={keyword} onChange={(e)=>setKeyword(e.target.value)} />
                <button type="submit" class="flex items-center justify-center px-4 border-l">
                    <svg class="w-6 h-6 text-white-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                    </svg>
                </button>
            </div>
        </div>

        </form>
       
    </>
    )
}

export default SearchBox
