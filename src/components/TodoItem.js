import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import 'antd/es/button/style/css';
import { Checkbox } from 'antd';
import 'antd/es/checkbox/style/css';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }


    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <Checkbox onChange={this.props.markComplete.bind
                        (this, id)}></Checkbox>
                    {''}
                    {title}
                    <Button type="danger" onClick={this.props.delTodo.bind(this, id)} style={btnStyle} >Eliminar</Button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {

    float: 'right'
}

export default TodoItem
