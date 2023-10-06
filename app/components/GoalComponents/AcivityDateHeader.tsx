import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import useWellxStyle from '../../utils/useWellxStyle';
import { Icon } from '../Icon';
import { Text } from '../Text';
import moment from "moment"
import { add } from 'date-fns';

export default function AcivityDateHeader(props) {
    const { type } = props;
    const [dateHeading, setDateHeading] = useState('');
    const [pagination, setPagination] = useState(0);
    const wellxStyle = useWellxStyle();
    const { theme } = wellxStyle;
    const { colors } = theme;
    const styles = getLocalStyle(theme);


    useEffect(() => {
        setCalenderHeading(type);

    }, [type])

    useEffect(() => {
        // HeaderFormat(type, pagination)
        setCalenderHeading(type)
    }, [pagination])


    const setCalenderHeading = (type: string) => {
        if (type == 'day') {
            var format = HeaderFormat(type, pagination);
            setDateHeading(format);
        }

        if (type == 'week') {
            var format = HeaderFormat(type, pagination);
            setDateHeading(format);
        }

        if (type == 'month') {
            var format = HeaderFormat(type, pagination);
            setDateHeading(format);
        }
    }

    const changeDateValue = (v: string, type: string) => {
        if (v == 'next') {
            setPagination(pre => pre + 1);
        } else {
            setPagination(pre => pre - 1);
        }
    }


    const HeaderFormat = (value, pagination) => {

        var final = '';
        const day = moment().add(pagination, 'd');
        const weekStart = moment().add(pagination, 'week').startOf('week').format('D');
        const weekEnd = moment().add(pagination, 'week').endOf('week').format('D');
        const weekMonth = moment().add(pagination, 'week').startOf('week').format('MMMM');
        const month = moment().add(pagination, 'M');

        if (value == 'day') {
            final = day.format('dddd, MMMM D')

        }

        if (value == 'week') {
            final = weekMonth + ' ' + weekStart + '-' + weekEnd
        }

        if (value == 'month') {
            final = month.format('MMMM')
        }

        return final;

    }



    return (
        <View style={styles.historyHeader}>
            <TouchableOpacity onPress={() => changeDateValue('prv', type)}>
                <Icon icon="leftArrowBig" />
            </TouchableOpacity>
            <Text text={dateHeading} style={styles.dateHeading} />
            <TouchableOpacity onPress={() => changeDateValue('next', type)}>
                <Icon icon="rightArrowBig" />
            </TouchableOpacity>
        </View>
    )
}

function getLocalStyle(theme) {
    const { colors, typography } = theme;
    // console.log("typography", theme)
    return StyleSheet.create({
        historyHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center'
        },
        dateHeading: {
            fontSize: 18,
            lineHeight: 22,
            fontFamily: typography.fonts.nexa.regular,
            fontWeight: '400'
        },
    })
}