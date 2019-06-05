import React,{Component,Fragment} from 'react'
import OtherSystems from './OtherSystems'
import Systems from './Systems'
import Loading from '../components/Loading'

export default class SystemsContainer extends Component {
    
    state = {
        data: [],
        loading: true,
        error: false,
        numRep: 7,
        btnMore: true,
        showBtnReset: false
    }

    componentDidMount(){
       this.fetchData()
    }



    fetchData = async () =>{

         let url = 'https://api.github.com/users/Rafael-LH';

         this.setState({
             loading: true,
             btnMore: false
         })
    
         try {
            
            let fetchData = await fetch(url)
            let fetchResponse = await fetchData.json()
            let data = await `${fetchResponse.repos_url}?per_page=${this.state.numRep}`
            let responseData = await fetch(data)
            let responseJson = await responseData.json() 

            if(this.state.numRep >= fetchResponse.public_repos){
                this.setState({
                    showBtnReset: true
                })
          }
            
            this.setState({
                data: responseJson,
                loading: false,
                numRep: this.state.numRep + 7,
                btnMore: this.state.showBtnReset ? false : true,
            })

         } catch (error) {
             this.setState({
                 loading: false,
                 error: true,
                 messageErr: `Ha ocurrido algun error ${error}` 
             })
             console.log(`Ha ocurrido algun error ${error}`); 
         }
 
    }
    
    resetRepos = () => {

            this.setState({
                btnMore: true,
                numRep: 7,
                showBtnReset: false
               })

            this.fetchData()      
    }

    render(){

        if(this.state.error){
            return <p>{this.state.messageErr}</p>
        } 
        return(
          <Fragment>  
            <Systems /> 
           <h1 className="other-systems">Otros Sistemas</h1>
           <div className="container-others-systems">
             {
                 this.state.data.map( items =>{
                      return <OtherSystems key={items.id} {...items} /> 
                 })            

             }
            </div>

            <div className="container-more-projects">
            {
                this.state.loading &&
                <Loading />
            }
             {
                 this.state.btnMore &&
                 <span className="btn-more-projects" onClick={() => this.fetchData() }>Mas</span>
                }
             {
                 this.state.showBtnReset &&
                 <span className="btn-more-projects-reset" onClick={() => this.resetRepos()}>Resetear</span>
             }
            </div>

           </Fragment>

            )
        }
    } 
