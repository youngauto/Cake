/**
 * Created by Administrator on 2017/4/30.
 */
import React, {Component} from 'react';
import {
    View,
    Navigator
} from 'react-native';
export default class Navigation extends Component {
    render() {
        // 创建route对象
        const rootRoute = {
            component: this.props.component,
            passProps: {
                ...this.props.passProps
            }
        };
        return (
            <Navigator
                initialRoute={rootRoute}
                configureScene={() => Navigator.SceneConfigs.PushFromRight}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return (
                        <View style={{flex: 1}}>
                            <Component
                                navigator={navigator}
                                route={route}
                                {...route.passProps}/>
                        </View>
                    )
                }}/>
        )
    }
}