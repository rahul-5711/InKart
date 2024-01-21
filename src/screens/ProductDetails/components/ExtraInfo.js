/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import {View, Text} from 'react-native';
import colors from '../../../components/common/colors';
import style from '../style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Accordion from 'react-native-collapsible/Accordion';
import {useDimensionContext} from '../../../context';
import {useState} from 'react';

const ExtraInfo = props => {
  const dimensions = useDimensionContext();
  const responsiveStyle = style(
    dimensions.windowWidth,
    dimensions.windowHeight,
    dimensions.isPortrait,
  );
  const [currentactiveSection, setActiveSection] = useState([0]);
  const DetailsArray = [
    {
      title: 'Manufacture Details',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
    {
      title: 'Product Disclaimer',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      title: 'Features & Details',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    },
  ];

  const _renderHeader = sections => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={responsiveStyle.descHead}>{sections.title}</Text>
        <AntDesign name="down" size={25} color={colors.grey} />
      </View>
    );
  };

  const _renderContent = sections => {
    return (
      <View>
        <Text style={responsiveStyle.desc}>{sections.content}</Text>
      </View>
    );
  };

  const _updateSections = activeSections => {
    setActiveSection(activeSections);
  };
  return (
    <>
      <Accordion
        activeSections={currentactiveSection}
        sections={DetailsArray}
        renderHeader={_renderHeader}
        renderContent={_renderContent}
        onChange={_updateSections}
        underlayColor="transparent"
        sectionContainerStyle={{
          paddingVertical: 10,
          borderBottomColor: colors.grey,
          borderBottomWidth: 1,
        }}
      />
    </>
  );
};

export default ExtraInfo;
