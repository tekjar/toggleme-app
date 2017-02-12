// Press Device action creator with id of pressed device
export const pressDevice = (deviceId) => {
    return {
        type: 'press_device',
        payload: deviceId
    };
};
