import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { MyColors, MyFont } from "../../../../src/Presentation/theme/AppTheme";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../../App";
import FloatingMenu from "../../../Presentation/components/FloatingMenu";
import Icons from "../../../Presentation/theme/Icons";

const Cosultationlist = () => {
  const { CalendarEditIcon } = Icons;

  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

  const ConsultationItems = [
    {
      id: 1,
      image: require("../../../../assets/consultas/cuidado-del-cabello.jpg"),
      title: "Cuidado del cabello",
      description:
        "En Rogans entendemos lo desafiante que puede ser lidiar con la pérdida de cabello y sus efectos en la autoestima y la confianza. Te ofrecemos un enfoque integral y experto para abordar la alopecia y ayudarlo a recuperar su cabello y su confianza.",
      duracion_cita: "30 minutos",
      precio: "$ 80.000",
    },
    {
      id: 2,
      image: require("../../../../assets/consultas/cuidado-de-la-piel.jpg"), // foto pendiente
      title: "Cuidado de la piel",
      description:
        "Reconocemos la importancia de mantener una piel saludable, radiante y rejuvenecida. Te brindamos soluciones personalizadas y tratamientos cosméticos de vanguardia para ayudarte a lograr tu apariencia ideal",
      duracion_cita: "30 minutos",
      precio: "$ 50.000",
    },
    {
      id: 3,
      image: require("../../../../assets/consultas/rendimiento-sexual.jpg"),
      title: "Rendimiento Sexual",
      description:
        "Reconocemos la importancia de mantener una piel saludable, radiante y rejuvenecida. Te brindamos soluciones personalizadas y tratamientos cosméticos de vanguardia para ayudarte a lograr tu apariencia ideal",
      duracion_cita: "30 minutos",
      precio: "$ 100.000",
    },
    {
      id: 4,
      image: require("../../../../assets/consultas/salud-mental.jpg"),
      title: "Salud Mental",
      description:
        "Tu salud mental es nuestra prioridad, y estamos comprometidos a trabajar contigo para que puedas vivir una vida más plena y equilibrada.",
      duracion_cita: "30 minutos",
      precio: "$ 80.000",
    },
    {
      id: 5,
      image: require("../../../../assets/consultas/consulta-medica-general.jpg"),
      title: "Medicina General",
      description:
        "Nos enorgullece ofrecer atención médica integral para cuidar de tu salud en general. Con médicos altamente calificados que se dedican  a proporcionar atención médica personalizada y completa para toda tu familia",
      duracion_cita: "20 minutos",
      precio: "$ 50.000",
    },
    {
      id: 6,
      image: require("../../../../assets/consultas/estetica-dental.jpg"),
      title: "Estética dental ",
      description:
        "Te ayudamos a lograr la sonrisa perfecta que siempre has deseado. Nuestro equipo de especialistas en odontología estética se dedica a transformar sonrisas y a mejorar la confianza de nuestros pacientes. ",
      duracion_cita: "30 minutos",
      precio: "$ 80.000",
    },
    {
      id: 7,
      image: require("../../../../assets/consultas/nutricion.jpg"),
      title: "Nutriciòn",
      description:
        "Contamos con expertos en nutrición quienes te apoyan y diseñar planes personalizados que se ajusten a tu estilo de vida y necesidades individuales. Ya sea que desees perder peso, aumentar tu energía o mejorar tus hábitos alimenticios.",
      duracion_cita: "45 minutos",
      precio: "$ 80.000",
    },
    {
      id: 8,
      image: require("../../../../assets/consultas/ADN.jpg"),
      title: "ADN",
      description:
        "Te ofrecemos una ventana a tu propia historia genética. Nuestro equipo de expertos en genética está dedicado a ayudarte a descubrir información valiosa sobre tus antecedentes familiares, predisposiciones genéticas y mucho más. ",
      duracion_cita: "40 minutos",
      precio: "$ 00.000",
    }, 
  ];

  return (
    <View style={styles.container}>
      <FloatingMenu />
      <ScrollView>
        <Text style={styles.title}>Consultas para ti</Text>
        <View style={styles.consultationsContainer}>
          {ConsultationItems.map((item, index) => (
            <View key={index} style={styles.consultation}>
              <Image source={item.image} style={styles.consultationImage} />
              <View style={styles.consultationInfo}>
                <Text style={styles.consultationTitle}>{item.title}</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("DescripcionConsultas")}
                  style={styles.agendarBtn}
                >
                  <CalendarEditIcon
                    style={styles.iconAgendarBtn}
                    width={16}
                    height={16}
                  />
                  <Text style={styles.textAgendarBtn}>Agendar</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
    position: "relative",
  },
  title: {
    fontSize: 18,
    fontFamily: MyFont.medium,
    color: MyColors.secondary,
    marginTop: 30,
    marginBottom: 15,
    paddingHorizontal: 16,
  },
  consultationsContainer: {
    marginBottom: 100,
    paddingHorizontal: 16,
  },
  consultation: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 12,
  },
  consultationInfo: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 20,
    paddingRight: 25,
    paddingLeft: 15,
    paddingBottom: 15,
  },
  consultationImage: {
    width: 143,
    height: 111,
    borderRadius: 15,
  },

  consultationTitle: {
    fontSize: 18,
    fontFamily: MyFont.medium,
    color: "#404040",
    marginBottom: 30,
  },
  // Estilos boton agendar:
  agendarBtn: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  iconAgendarBtn: {
    marginRight: 10,
  },
  textAgendarBtn: {
    fontSize: 13,
    fontFamily: MyFont.regular,
  },
});

export default Cosultationlist;
