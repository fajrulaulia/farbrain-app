import React from 'react';
import {
    Text, View, StyleSheet, Button, TouchableOpacity
} from 'react-native';

import data from '../datas/payload.json'

function Game() {
    const isMounted = React.useRef(false);

    const [Boxdata, setBoxdata] = React.useState([])
    const [Count, SetCount] = React.useState(0)
    const [IsWrong, setIsWrong] = React.useState(false)
    const [Point, SetPoint] = React.useState(0)
    const [Show, SetShow] = React.useState(true)



    React.useEffect(() => {
        start()
    }, [])

    function start() {
        setTimeout(function () { SetShow(false); }, 10000);
        setBoxdata(shuffle(data.data))
        setIsWrong(false)
        SetCount(0)
        SetPoint(0)
    }

    function shuffle(array) {
        var tmp, current, top = array.length;
        if (top) while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
    }

    function assign(num) {
        let ct = Count
        ct++
        SetCount(ct)
        if (ct === num) {
            let pt = Point
            pt += 100
            SetPoint(pt)
        } else {
            setIsWrong(true)
            SetShow(true)
        }
    }

    return (
        <React.Fragment>
            <View style={styles.Container}>
                <View style={styles.Row}>
                    <View style={styles.Header}>
                        <Text style={styles.Title}>Farbrain </Text>
                        <Text style={styles.Subtitle}>Increase you memory with Solve this Problem</Text>
                        <Text style={styles.Point}>Point : {Point}</Text>
                    </View>
                </View>
                <View style={styles.Row}>
                    <View style={styles.BoxArea}>
                        <View style={[styles.parent]}>
                            {
                                Boxdata.map((value, index) => (
                                    <TouchableOpacity
                                        onPress={() => assign(value.id)}
                                        key={index}
                                        style={[styles.child, { backgroundColor: !IsWrong ? value.color : "red" }]}  >
                                        <Text style={[styles.Number, { display: Show ? 'flex' : 'none' }]}>{value.id}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                    </View>
                </View>

                <View style={styles.Row}>
                    <View style={styles.Footer}>

                        <View style={styles.Action}>
                            <Button
                                onPress={() => start()}
                                title={"Reset"}
                                color="#339966"
                            />
                        </View>
                        <View style={styles.Action}>
                            <Button
                                onPress={() => console.log("sssss")}
                                title={"How to play ??"}
                                color="#339966"
                            />
                        </View>

                    </View>
                </View>

            </View>
        </React.Fragment>
    );
}


const styles = StyleSheet.create({
    Container: {
        padding: 10,
    },
    Row: {
        margin: 5
    },
    Header: {
        paddingTop: 20
    },
    Title: {
        fontSize: 25,
        textAlign: 'center',
    },
    Subtitle: {
        textAlign: 'center',
    },
    BoxArea: {
        textAlign: 'center',

    },
    parent: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    child: {
        width: 100,
        margin: 5,
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    Footer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    },
    Action: {
        margin: 5,
    },
    Point: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
        textAlign: 'center',

    },
    Number: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    }
});




export default Game;
