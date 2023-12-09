import React from "react";
import Dropdown from 'react-native-input-select';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const data = [
	{label: 'см', value: 'см'},
	{label: 'мм', value: 'мм'},
	{label: 'м', value: 'м'},
	{label: 'км', value: 'км'},
	{label: 'фут', value: 'фут'},
]

export const Lenght = () => {
	const [fromCurrency, setFromCurrency] = React.useState('');
	const [toCurrency, setToCurrency] = React.useState('');
	const [oneNumb, setOneNumb] = React.useState()
	const [result, setResult] = React.useState()

	function switchData() {
		const temp = toCurrency;
		setToCurrency(fromCurrency)
		setFromCurrency(temp)
	}

	function convert() {
		if (fromCurrency !== toCurrency) {
			switch (fromCurrency) {
				case 'см':
					if (toCurrency === 'мм') {
						setResult(oneNumb * 10)
					} else if (toCurrency == 'м') {
						setResult(oneNumb / 100)
					} else if (toCurrency == 'км') {
						setResult(oneNumb / 100000)
					} else if (toCurrency == 'фут') {
						setResult(oneNumb / 30.48)
					}
					break;
				case 'мм':
					if (toCurrency === 'см') {
						setResult(oneNumb / 10)
					} else if (toCurrency == 'м') {
						setResult(oneNumb / 100)
					} else if (toCurrency == 'км') {
						setResult(oneNumb / 100000)
					} else if (toCurrency == 'фут') {
						setResult(oneNumb * 0.0032808399)
					}
					break;
				case 'м':
					if (toCurrency === 'мм') {
						setResult(oneNumb * 1000)
					} else if (toCurrency == 'см') {
						setResult(oneNumb / 100)
					} else if (toCurrency == 'км') {
						setResult(oneNumb * 0.001)
					} else if (toCurrency == 'фут') {
						setResult(oneNumb * 3.28083989501)
					}
					break;
				case 'км':
					if (toCurrency === 'мм') {
						setResult(oneNumb * 1000000)
					} else if (toCurrency == 'м') {
						setResult(oneNumb * 1000)
					} else if (toCurrency == 'см') {
						setResult(oneNumb * 100000)
					} else if (toCurrency == 'фут') {
						setResult(oneNumb * 3280.8398950131)
					}
					break;
				case 'фут':
					if (toCurrency === 'мм') {
						setResult(oneNumb * 304.8)
					} else if (toCurrency == 'м') {
						setResult(oneNumb * 0.3048)
					} else if (toCurrency == 'км') {
						setResult(oneNumb * 0.0003048)
					} else if (toCurrency == 'см') {
						setResult(oneNumb * 30.48)
					}
					break;
			}
		} else if (fromCurrency == toCurrency) {
			setResult(`Нельзя конвертировать из ${fromCurrency} в`)
		} else {
			setResult('Ошибка')
		}
	}


	return (
	  <View style={styles.container}>
		<View style={styles.item}>
			<Dropdown
			options={data}
			placeholder="Конвертировать из"
			selectedValue={fromCurrency}
			onValueChange={(value) => setFromCurrency(value)}/>
			<TextInput
			style={styles.input}
			value={oneNumb}
			onChangeText={setOneNumb}>
			</TextInput>
		</View>
		<Button onPress={switchData} title="switch"></Button>
		<View style={styles.item}>
			<Dropdown
			options={data}
			placeholder="Конвертировать в"
			selectedValue={toCurrency}
			onValueChange={(value) => setToCurrency(value)}/>
		</View>
		<Button title="Конвертировать" onPress={() => convert()}>
		</Button>
		<Text>{result} {toCurrency}</Text>
	  </View>
	);
 }

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	  rowGap: 20,
	  padding: 10
	},
	item: {
		padding: 20,
		borderColor: '#777',
		borderWidth: 2,
		borderRadius: 20,
		width: '100%'
	},
	input: {
		padding: 3,
		borderColor: '#777',
		borderWidth: 2,
		borderRadius: 10,
	}
});
 