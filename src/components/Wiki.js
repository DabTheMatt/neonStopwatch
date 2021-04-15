import React from "react"

class Wiki extends React.Component {
    constructor(props){
        super(props);
      this.state = {
        wikiData: undefined,
        requestFailed: false,
        extract: ""
      }
    }
    componentDidMount(){
      console.log('Before fetch')
        fetch("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts|pageimages&pithumbsize=400&origin=*&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=yoga")
        .then(response => {
            if(!response.ok){
                throw Error("Response not ok")
            }
            return response
        })
        .then(data => data.json())
        .then(data => {
            this.setState({
                wikiData: data,
                extract: data.query.pages[34258].extract
            })

            console.log(data.query.pages[34258].extract);
        }, ()=>{
          this.setState({
            requestFailed: true
          })
        })
    }

    displayResults=()=>{
        const tempData = this.state.wikiData
        console.log(tempData);
                
    }

    render(){
        if(this.state.requestFailed) return <h1>Request Failed</h1>
        if(!this.state.wikiData) return <h2>Loading</h2>
        return (
            <div>
                
                <h2>{this.state.extract}</h2>
            </div>
        )
    }
}

export default Wiki