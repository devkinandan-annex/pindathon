import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    VictoryBar, VictoryChart, VictoryAxis,
    VictoryTheme,
    VictoryLabel
} from 'victory-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Graph(props: { data?: any; x?: any; y?: any; mode?: any; domainPadding?: any; xlabelStyle?: any; ylabelStyle?: any; }) {

    const { data, x, y, mode, domainPadding, xlabelStyle, ylabelStyle } = props;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
     
    const formatLabel = (x) => {
        const labelSplit = x.split(" ");
        let formatedLabel = '';
        if(labelSplit.length > 1){
            formatedLabel = labelSplit[0]+'\n'+labelSplit?.[1];
        }else{
            formatedLabel = x;
        }
        
        
        return formatedLabel;
    }   
    
    return (
        <VictoryChart
            // adding the material theme provided with Victory
            theme={VictoryTheme.material}
            domainPadding={domainPadding}
            height={260}
            width={windowWidth}
        >
            
            {
                mode != 'step' ?  
                    <VictoryAxis
                        style={{
                            tickLabels: xlabelStyle
                        }}
                        
                        dependentAxis
                        tickFormat={(x) => (`${x / 1000}%`)}
                    />                   
                : 
                    <VictoryAxis
                        style={{
                            axis: { strokeWidth: '0', },
                            tickLabels: xlabelStyle, 
                            
                            
                        }}
                        
                        dependentAxis
                        tickFormat={(x) => x}
                    /> 
            }
            {
                mode != 'step' ? 
                    <VictoryAxis
                        style={{
                            tickLabels: ylabelStyle
                        }}
                        //tickValues={[1, 2, 3, 4]}
                        tickFormat={(x) => formatLabel(x)}
                    />
                :   
                    <VictoryAxis
                        //tickValues={[1, 2, 3, 4]}
                        fixLabelOverlap={true}
                        style={{
                            tickLabels: ylabelStyle,
                            
                        }}
                        tickFormat={(x) => formatLabel(x)}
                    />
            }
            <VictoryBar
                cornerRadius={{ top:  4, bottom: 4 }}
                style={{ 
                    data: { 
                        fill: "#FA9CBF", 
                        opacity: 0.8,
                        width: 12
                    } 
                }}
                animate={{
                    duration: 3000,
                    onLoad: {
                        duration: 800
                    }
                }}
                data={data}
                x={x}
                y={y}
                
            />

            
      
        </VictoryChart>
    )
}

const styles = StyleSheet.create({})