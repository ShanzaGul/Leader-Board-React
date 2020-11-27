import React , {Component} from 'react';
class Student extends Component {
    constructor(){
        super();
        this.state = {
          score: 0,
          statusSuc: false,
          statusFail: false
        }
      }
    
    componentDidMount(){
        this.setState({
            score: this.props.score
        });
    }

    add(){
        this.setState({
            score: this.state.score + 1
        },
        ()=>{
            if(this.state.score >=350){
               this.setState({statusSuc:true})
            }
            if(this.state.score >=341)
            {
                this.setState({statusFail:false})
            }
        })
    }

    minus(){
        this.setState({
            score: this.state.score - 1
        },
        ()=>{
            if(this.state.score <=340){
               this.setState({statusFail:true})
            }
            if(this.state.score <=349)
            {
                this.setState({statusSuc:false})
            }
        })
    }



    render(){            
        const isSuccess = this.state.statusSuc;
        const isFail = this.state.statusFail;
        let text;
        if(isSuccess){
            text = <span className="text-success">Success</span>
        }else if(isFail){
            text = <span className="text-danger">Fail</span>
        }else{
            text = ' ';
        }

        return (
            <div className="student container mt-2 mb-2 pt-2">
            <div className="row bg-light">
                <div className="col-lg-8 col-md-12">
                <div className="studentName d-flex justify-content-start">
                <h5 className="p-2 font-weight-bold">{this.props.name}</h5>
                <p className="p-2">{text}</p>
                <button type="button" className="btn btn-outline-success m-1" onClick={()=>this.add()}>+</button>
                <button type="button" className="btn btn-outline-danger m-1" onClick={()=>this.minus()}>-</button>
                </div>
                
                </div>
                <div className="col-lg-4 col-md-12">
                <div className="score d-flex justify-content-lg-end justify-content-md-start text-primary">
                <p>{this.state.score}</p>
                </div>
                </div>

            </div>
            <div className="row bg-light">
                <div className="col-lg-8 col-md-12">
                <div className="universityName d-flex justify-content-start ">
                    <p>{this.props.uni}</p>
                </div>
                </div>
                

            </div>
            
            </div>
        );
    }

}

export default Student;

