import React, { useEffect } from 'react'
import { Text, View, Platform } from 'react-native'
import * as RNStoreReview from 'react-native-store-review';

const StoreReview = (props) => {
	const { showDialog, editor } = props
	console.log(editor)
	useEffect(() => {
		if (showDialog && (Platform.OS === "ios" || Platform.OS === "android")) {
			if (RNStoreReview.isAvailable) {
				RNStoreReview.requestReview();
			}
		}
	}, [showDialog])
	if (editor || (Platform.OS !== "ios" && Platform.OS !== "android")) {
		return (<View>
			<Text>Store Review Installed</Text>
		</View>)
	}
	return(
		<View></View>
	)
}

export default StoreReview
