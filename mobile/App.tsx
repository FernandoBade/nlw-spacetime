import { StatusBar } from 'expo-status-bar'
import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native'
import { useFonts, BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import luzBg from './src/assets/luz.png'
import Linhas from './src/assets/linhas.svg'
import Logo from './src/assets/logo.svg'
import { styled } from 'nativewind'

const StyledLinhas = styled(Linhas)

function handleVerProjeto() {
  Linking.openURL('https://github.com/FernandoBade/nlw-spacetime')
}

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <ImageBackground
      source={luzBg}
      className="flex-1 items-center justify-center bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-50%' }}
    >
      <StyledLinhas className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <Logo />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-500 px-5 py-2"
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="leading-relax text-center font-body text-sm text-gray-200">
        Feito com 💜 no NLW da Rocketseat
      </Text>
      <TouchableOpacity activeOpacity={0.7} onPress={handleVerProjeto}>
        <Text className="pt-2 text-purple-300">Ver projeto no GitHub</Text>
      </TouchableOpacity>
      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
