import React from "react";
import {View, Modal, Text, Button} from 'react-native'
import {styles} from './styles'


const ModalDelete = ({modalVisible,selectedTask,onHandleCancel,onHandleDelete}) =>{
    return(
        <Modal visible={modalVisible} animationType='fade'>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Task detail</Text>
                <View style={styles.modalDetailContainer}>
                    <Text style={styles.modalDetailText}>¿quieres eliminarlo?</Text>
                    <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
                </View>
                <View style={styles.modalButtonContainer}>
                    <Button
                    title='cancel'
                    color='#9a848f'
                    onPress={onHandleCancel}
                    />
                    <Button
                    title='Delete'
                    color='#9a848f'
                    onPress={onHandleDelete}
                    />
                </View>
                </View>
            </Modal>
    )
}


export default ModalDelete;