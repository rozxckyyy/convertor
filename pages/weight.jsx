import React from "react";
import Dropdown from 'react-native-input-select';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const data = [
	{label: 'кг', value: 'кг'},
	{label: 'гм', value: 'гм'},
	{label: 'т', value: 'т'},
	{label: 'фунт', value: 'фунт'},
	{label: 'унция', value: 'унция'},
]

export const Weight = () => {
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
				case 'кг':
					if (toCurrency === 'гм') {
						setResult(oneNumb * 1000)
					} else if (toCurrency == 'т') {
						setResult(oneNumb * 0.001)
					} else if (toCurrency == 'фунт') {
						setResult(oneNumb * 2.20462)
					} else if (toCurrency == 'унция') {
						setResult(oneNumb * 35.27392)
					}
					break;
				case 'гм':
					if (toCurrency === 'кг') {
						setResult(oneNumb * 0.001)
					} else if (toCurrency == 'т') {
						setResult(oneNumb * 0.000001)
					} else if (toCurrency == 'фунт') {
						setResult(oneNumb * 0.0022)
					} else if (toCurrency == 'унция') {
						setResult(oneNumb * 0.0352)
					}
					break;
				case 'т':
					if (toCurrency === 'гм') {
						setResult(oneNumb * 1000000)
					} else if (toCurrency == 'кг') {
						setResult(oneNumb * 1000)
					} else if (toCurrency == 'фунт') {
						setResult(oneNumb * 2204.6226)
					} else if (toCurrency == 'унция') {
						setResult(oneNumb * 35273.962)
					}
					break;
				case 'фунт':
					if (toCurrency === 'гм') {
						setResult(oneNumb * 453.59237)
					} else if (toCurrency == 'т') {
						setResult(oneNumb * 0.00045)
					} else if (toCurrency == 'кг') {
						setResult(oneNumb * 0.45359)
					} else if (toCurrency == 'унция') {
						setResult(oneNumb * 16)
					}
					break;
				case 'унция':
					if (toCurrency === 'гм') {
						setResult(oneNumb * 28.34952)
					} else if (toCurrency == 'т') {
						setResult(oneNumb * 0.00003)
					} else if (toCurrency == 'фунт') {
						setResult(oneNumb * 0.0625)
					} else if (toCurrency == 'кг') {
						setResult(oneNumb * 0.02835)
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
 