import React, {Component} from 'react'
import {Form, Input, Button, Modal} from 'antd'
const FormItem = Form.Item;

class EditeRoomForm extends Component {
    submit() {
        const {updateItem} = this.props
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.key = updateItem.key;
                this.props.submit(values);
                this.props.form.resetFields();
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form
        const {updateItem} = this.props
        const formItemLayout = {
            labelCol: 5,
            wrapperCol: 19,
        };
        return <div>
            <Modal
                title="Modal"
                visible={this.props.isShow}
                onCancel={this.props.hideModal}
                footer={[
                    <Button key="submit"
                            type="primary" size="large" onClick={this.submit.bind(this)}>Save</Button>,
                    <Button key="back" type="primary" size="large"
                            onClick={this.props.deleteRoom.bind(this, updateItem.key)}>Delete</Button>
                ]}
            >
                <Form>
                    <FormItem label="Room name" {...formItemLayout}>
                        {getFieldDecorator('roomName', {
                            rules: [{required: true, message: 'Please input roomName!'}],
                            initialValue: updateItem.roomName
                        })(
                            <Input placeholder="Username"/>
                        )}
                    </FormItem>
                    <FormItem label="Price" {...formItemLayout}>
                        {getFieldDecorator('price', {
                            rules: [{required: true, message: 'Please input price!'}],
                            initialValue: updateItem.price
                        })(
                            <Input placeholder="price"/>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        </div>
    }
}
EditeRoomForm = Form.create()(EditeRoomForm);
export default EditeRoomForm