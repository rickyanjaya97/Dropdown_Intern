import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class App extends Component {

  state = {
    choose: [],
    type: [],
    title: [],
    clickChoose: [],
    clickJenis: [],
    clickTitle: [],
  }

  // const [selectOpt1, selectOpt2] = useState({
  //   option1: [
  //     { value: 'bunga', label: 'Bunga' },
  //     { value: 'hewan', label: 'Hewan' },
  //   ],
  //   // option2: [
  //   //   { value: 'mawar', label: 'Mawar', link: 'bunga' },
  //   //   { value: 'melati', label: 'Melati', link: 'bunga' },
  //   //   { value: 'kucing', label: 'Kucing', link: 'hewan' },
  //   //   { value: 'anjing', label: 'Anjing', link: 'hewan' },
  //   // ],
  // });

  handleChoose = (clickChoose) => {
    this.setState({ clickChoose })
  }

  handleJenis = (clickChoose) => {
    this.setState({ clickJenis: clickChoose })
  }

  handleTitle = (clickChoose) => {
    this.setState({ clickTitle: clickChoose })
  }


  render() {

    const option1 = [
      { value: 'bunga', label: 'Bunga' },
      { value: 'hewan', label: 'Hewan' },
    ]


    const option2 = [
      { value: 'mawar', label: 'Mawar', link: 'bunga' },
      { value: 'melati', label: 'Melati', link: 'bunga' },
      { value: 'kucing', label: 'Kucing', link: 'hewan' },
      { value: 'anjing', label: 'Anjing', link: 'hewan' },
    ]


    const option3 = [
      { value: 'mawar_merah', label: 'Mawar Merah', link: 'mawar' },
      { value: 'mawar_putih', label: 'Mawar putih', link: 'mawar' },
      { value: 'melati_merah', label: 'Melati Merah', link: 'melati' },
      { value: 'melati_merah', label: 'Melati Merah', link: 'melati' },
      { value: 'kucing_kuning', label: 'Kucing Kuning', link: 'kucing' },
      { value: 'kucing_putih', label: 'Kucing Putih', link: 'kucing' },
      { value: 'anjing_kuning', label: 'Anjing Kuning', link: 'anjing' },
      { value: 'anjing_putih', label: 'Anjing Putih', link: 'anjing' },
    ]

    const switch2 = option2.filter((x) => x.link === this.state.clickChoose.value)
    const switch3 = option3.filter((x) => x.link === this.state.clickJenis.value)

    return (
      <div >
        <div className="top">Animals' Dropdown</div>
        <p className="top">Choose</p>
        <Dropdown className="text"
          placeholder="Select.."
          value={this.state.clickChoose.value}
          onChange={this.handleChoose}
          options={option1}
        />
        <p className="top">Type</p>
        <Dropdown className="text"
          placeholder="Select.."
          value={this.state.clickJenis.value}
          onChange={this.handleJenis}
          options={switch2}
        />
        <p className="top">Title</p>
        <Dropdown className="text"
          placeholder="Select.."
          value={this.state.clickTitle.value}
          onChange={this.handleTitle}
          options={switch3}
        />
      </div >
    )
  }
};
export default App;