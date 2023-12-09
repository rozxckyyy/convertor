import React from "react";
import Dropdown from 'react-native-input-select';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const data = [
	{label: 'USD', value: 'USD'},
	{label: 'RUB', value: 'RUB'},
	{label: 'GBP', value: 'GBP'},
	{label: 'EUR', value: 'EUR'},
	{label: 'CNY', value: 'CNY'},
]

export const Money = () => {
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
				case 'RUB':
					if (toCurrency === 'USD') {
						setResult(oneNumb * 0.011)
					} else if (toCurrency == 'GBP') {
						setResult(oneNumb * 0.0086)
					} else if (toCurrency == 'EUR') {
						setResult(oneNumb * 0.01)
					} else if (toCurrency == 'CNY') {
						setResult(oneNumb * 0.078)
					}
					break;
				case 'USD':
					if (toCurrency == 'RUB') {
						setResult(oneNumb * 90)
					} else if (toCurrency == 'GBP') {
						setResult(oneNumb * 0.8)
					} else if (toCurrency == 'EUR') {
						setResult(oneNumb * 0.9)
					} else if (toCurrency == 'CNY') {
						setResult(oneNumb * 7.1)
					}
					break;
				case 'GBP':
					if (toCurrency == 'RUB') {
						setResult(oneNumb * 99)
					} else if (toCurrency == 'USD') {
						setResult(oneNumb * 1.25)
					} else if (toCurrency == 'EUR') {
						setResult(oneNumb * 1.17)
					} else if (toCurrency == 'CNY') {
						setResult(oneNumb * 8.95)
					}
					break;
				case 'EUR':
					if (toCurrency == 'RUB') {
						setResult(oneNumb * 99)
					} else if (toCurrency == 'USD') {
						setResult(oneNumb * 1.08)
					} else if (toCurrency == 'GBP') {
						setResult(oneNumb * 0.86)
					} else if (toCurrency == 'CNY') {
						setResult(oneNumb * 7.68)
					}
					break;
				case 'CNY':
					if (toCurrency == 'RUB') {
						setResult(oneNumb * 12)
					} else if (toCurrency == 'USD') {
						setResult(oneNumb * 0.14)
					} else if (toCurrency == 'GBP') {
						setResult(oneNumb * 0.11)
					} else if (toCurrency == 'EUR') {
						setResult(oneNumb * 0.13)
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
 