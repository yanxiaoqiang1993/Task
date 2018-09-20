export default {
    list: {
        listData: mapList()
    },
    edite: {
        listData: mapList(),
        showEditeRoom: false,
        updateRoomItem: {}
    }
}

function mapList() {
    let Property = [];
    for (let i = 0; i < 10; i++) {
        let room = [];
        for (let j = 0; j < 4; j++) {
            room.push({
                roomName: `Room${j + 1}`,
                price: '250',
                key: i + j
            })
        }
        Property.push({
            name: `Property${i + 1}`,
            rooms: room,
            key: i
        })
    }
    return Property;
}
