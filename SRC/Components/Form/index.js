import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultIMC";

export default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Informe seu peso e sua altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("IMC")

    function imCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            imCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("SEU IMC É = ")
            setTextButton("CALCULAR NOVAMENTE")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha Peso e Altura")
    }

    
    return(
 <View>
  <View>
    <Text>
        Altura
    </Text>
    <TextInput
    onChangeText={setHeight}
    value={height}
    placeholder="Ex. 1.70"
    keyboardType="Numeric"
    />
    <Text>
        Peso
    </Text>
    <TextInput
    onChangeText={setWeight}
    value={weight}
    placeholder="Ex.70.7"
    keyboardType="Numeric"
    />
 
    <Button
    onPress={() => validationImc()}
    
     title={textButton}
    />


  </View>
  <ResultImc
    messageResultImc = {messageImc}
    ResultImc = {imc}
  />
 </View>
    );
}