export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// action creator
export const increment = () => (
    {
        type: 'INCREMENT'
    }
);

export const decrement = () => (
    {
        type: 'DECREMENT'
    }
);

// 他のところで使う場合は export する