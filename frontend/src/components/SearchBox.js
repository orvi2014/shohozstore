import React from 'react'

import {Form, Button} from 'react-bootstrap'

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
        <Form className="d-flex" onSubmit={submitHandler} inline>
            <Form.Control className="mr-sm-2 ml-sm-5" type="text" placeholder="Search Products ..." name="q" value={keyword} onChange={(e)=>setKeyword(e.target.value)}/>
            <Button className="p-2 " variant="outline-success" type="submit">Search</Button>
            
        </Form>
    )
}

export default SearchBox
