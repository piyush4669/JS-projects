/**
 * Created by Jeepeng on 2016/11/20.
 */

import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../../Global/Colors";
import { Icon } from "react-native-elements";

const DEFAULT_HEIGHT = 240;
const DEFAULT_COLUMN_WIDTH = 60;

class Table extends Component {
  static propTypes = {
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        dataIndex: PropTypes.string.isRequired,
        width: PropTypes.number
      })
    ).isRequired,
    columnWidth: PropTypes.number,
    height: PropTypes.number,
    dataSource: PropTypes.array.isRequired,
    renderCell: PropTypes.func
  };

  static defaultProps = {
    columns: [],
    dataSource: [],
    columnWidth: DEFAULT_COLUMN_WIDTH,
    height: DEFAULT_HEIGHT,
    renderCell: undefined
  };

  _renderCell(cellData, col) {
    let style = {
      width: col.width || this.props.columnWidth || DEFAULT_COLUMN_WIDTH
    };
    if (typeof cellData !== "string") {
      const mainText = cellData.text;
      const { extraData } = cellData;

      return (
        <View
          key={col.dataIndex}
          style={[
            styles.cell,
            style,
            {
              justifyContent: "space-between",
              flex: 1,
              flexDirection: "row"
            }
          ]}
        >
          <Text style={styles.bodyText}>{mainText}</Text>
          <View style={{ flexDirection: "row", marginRight: 3 }}>
            <Text style={[styles.bodyText, { color: extraData.color }]}>
              {extraData.text}
            </Text>
            {extraData.icon && (
              <Icon
                name={extraData.icon}
                type="material"
                color={extraData.color}
                size={10}
              />
            )}
          </View>
        </View>
      );
    }
    return (
      <View key={col.dataIndex} style={[styles.cell, style]}>
        <Text style={styles.bodyText}>{cellData}</Text>
      </View>
    );
  }

  _renderHeader() {
    let { columns, columnWidth } = this.props;
    return columns.map((col, index) => {
      let style = {
        width: col.width || columnWidth || DEFAULT_COLUMN_WIDTH,
        borderLeftWidth: index === 0 ? 1 : 0
      };
      return (
        <View key={index} style={[styles.headerItem, style]}>
          <Text style={styles.headerText}>{col.title}</Text>
        </View>
      );
    });
  }

  _renderRow(rowData, index) {
    let { columns, renderCell } = this.props;
    if (!renderCell) {
      renderCell = this._renderCell.bind(this);
    }
    return (
      <View key={index} style={styles.row}>
        {columns.map(
          col =>
            renderCell(rowData[col.dataIndex], col) ||
            this._renderCell(rowData[col.dataIndex], col)
        )}
      </View>
    );
  }

  render() {
    let { dataSource, height } = this.props;
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={[styles.contentContainer, { height }]}
        horizontal={true}
        bounces={false}
        scrollEnabled={false}
      >
        <View>
          <View style={styles.header}>{this._renderHeader()}</View>
          <ScrollView
            style={styles.dataView}
            contentContainerStyle={styles.dataViewContent}
            scrollEnabled={false}
          >
            {dataSource.map((rowData, index) =>
              this._renderRow(rowData, index)
            )}
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    height: 240
  },
  header: {
    flexDirection: "row"
  },
  headerItem: {
    width: DEFAULT_COLUMN_WIDTH,
    borderWidth: 1,
    borderColor: "#ECEEED",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  headerText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 8,
    paddingLeft: 10
  },
  dataView: {
    flexGrow: 1
  },
  dataViewContent: {},
  row: {
    flexDirection: "row",
    backgroundColor: "#fbfbfb",
    borderBottomWidth: 1,
    borderBottomColor: "#ECEEED"
  },
  cell: {
    width: DEFAULT_COLUMN_WIDTH,
    backgroundColor: "transparent",
    borderRightWidth: 1,
    borderRightColor: "#ECEEED",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  bodyText: {
    fontFamily: "Poppins-Regular",
    fontSize: 8,
    paddingLeft: 10,
    color: Colors.textGray
  }
});

export default Table;
