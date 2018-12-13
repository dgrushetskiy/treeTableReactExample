import React, {Component} from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import {getAllTerritory} from "../util/APIUtils";

//const API = 'http://localhost:5000/api/territory';
//const DEFAULT_QUERY = '/all';


class TreeTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            territory: [],
            isLoading: false,
            error: null,

        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        getAllTerritory().then(data =>{
            this.setState({territory: data.territory,isLoading: false})
        })

        // fetch(API + DEFAULT_QUERY)
        //     .then(response =>
        //         response.json())
        //     .then(data =>{
        //         this.setState({territory: data.territory,isLoading: false})
        //     });

    }


    render() {

        const columns = [{
            title: 'Территория',
            dataIndex: 'name',
            key: 'name',
        }];

       // const {data, isLoading} = this.state;
        const data = this.state.territory;

        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
       // const content = !isLoading ? <Table dataSource={data}/> : null;
        return (
            <div>
                <Table columns={columns}  dataSource={data} />
            </div>
        );
    }


}
export default TreeTable;