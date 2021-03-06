import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 3;

  state = {
    information: [
      {name: '홍길동', phone: '010-0000-0001', id: 0},
      {name: '김철수', phone: '010-0000-0002', id: 1},
      {name: '이영희', phone: '010-0000-0003', id: 2}
    ],
    keword: '', 
  }

  handleChange = (e) => {
    this.setState({
      keword: e.target.value,
    });
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++,
      })
    });
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id === id){
            return {
              id, 
              ...data,
            };
          }
          return info;
        }
      )
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <input value={this.state.keword} onChange={this.handleChange} placeholder='검색...' />
        <PhoneInfoList data={this.state.information.filter(
          info => info.name.indexOf(this.state.keword) > -1)} onRemove={this.handleRemove} onUpdate={this.handleUpdate} />
      </div>
    );
  }
}

export default App;
