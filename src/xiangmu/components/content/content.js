/*
 * Author: 李锦沛
 * E-Mail: 13169840505@163.com
 * NickName: les
 */
import React,{Component} from 'react'
import './content.scss'
import FilterBanner from '../../container/filterbanner/filterbanner'
import Classlist from '../../components/classlist/classlist'
export default class Content extends Component{

  // static state = {
  //   isactive : false
  // }
	state = {
		isShow : false
	}
  changeactive (id) {
    for (let item in this.refs){
      if(item == id){
        this.refs[item].classList.add('active')
      }else{
        this.refs[item].classList.remove('active')
      }
    };
  }
  changToFalse(){
		this.setState({
			isShow : false
		})
	}
  render(){
    return (<section className="content">
      <div className="left">
        <ul className="classlist">
          {
            this.props.data.map((item)=>{
              return (<li  onClick={(e) => {
                e.preventDefault();
                this.changeactive(item.id);
                
                this.props.getsubdata(item.id);
								// this.setState({
								// 	isShow : !this.state.isShow
								// })
              
              }} key={item.id} ><a  ref={item.id}  href="javascript ;">
              {item.name}</a>
              </li>)
            })
          }
        </ul>
      </div>
      <div className="right">
        <div className="banner_size">
          <FilterBanner />
        </div>
        <div className="class_list">
          <Classlist />
						{/*isShow={this.state.isShow}  */}
					
        </div>
      </div>
    </section>)
  }

  componentDidMount(){
    this.props.imigetonedata();
  }
  componentDidUpdate(){
    this.changeactive(1001447)
  }
}