import { StyleSheet, View, TouchableOpacity } from "react-native";
import { CloseSquare } from "iconsax-react-native";

export default function FooterAdd({ navigation }) {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.addIcon}
				onPress={() => {
					navigation.navigate("Home");
				}}
			>
				<CloseSquare size="41" color="white" variant="Bold" />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 14,
		position: "absolute",
		bottom: 0,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		flexDirection: "row",
		padding: 10,
		gap: 20,
		paddingBottom: 30,
	},
	bgIcon: {
		backgroundColor: "#00EFC5",
		padding: 12,
		paddingHorizontal: 25,
		borderRadius: 10,
	},
	addIcon: {
		alignItems: "center",
		justifyContent: "center",
		width: 80,
		height: 80,
		borderRadius: 100,
		backgroundColor: "#00EFC5",
	},
});
