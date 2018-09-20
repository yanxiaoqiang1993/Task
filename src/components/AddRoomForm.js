import React, {Component} from 'react'
import {Form, Input, Button} from 'antd'
const FormItem = Form.Item;

class AddRoomForm extends Component {
    handleSubmit(e) {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.submit(values);
                this.props.form.resetFields();
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form
        return <div>
            <Form layout="inline" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="Room name">
                    {getFieldDecorator('roomName', {
                        rules: [{required: true, message: 'Please input roomName!'}],
                    })(
                        <Input placeholder="Username"/>
                    )}
                </FormItem>
                <FormItem label="Price">
                    {getFieldDecorator('price', {
                        rules: [{required: true, message: 'Please input price!'}],
                    })(
                        <Input placeholder="price"/>
                    )}
                </FormItem>
                <Button type="primary" htmlType="submit">Add</Button>
            </Form>
        </div>
    }
}
AddRoomForm = Form.create()(AddRoomForm);
export default AddRoomForm