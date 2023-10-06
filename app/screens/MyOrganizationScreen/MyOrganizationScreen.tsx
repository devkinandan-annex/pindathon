import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors, spacing } from '../../theme'
import {Challenges} from '../../components/newsfeedComponents/Challenges'
import EmptyScreen from '../../components/Common/EmptyScreen'

export default function MyOrganizationScreen(_props: any) {
  const [emptyPost, setEmptyPost] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
      {emptyPost ? 
          <EmptyScreen Icon="emptyPost" title="MyFollowingScreen.emptyTextMyOrg" />
      
        :
        <View>
        <Challenges navigation={undefined} route={undefined} />
        <Challenges navigation={undefined} route={undefined}  />
        <Challenges navigation={undefined} route={undefined} />
        </View>
      }
      
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})