import React, {Component} from 'react';
import {
  BrightnessCategory,
  ColorCategory,
  PatternCategory
} from '../underglow-categories';
import styles from './lighting-menu.css';

export const Category = {
  Pattern: 'Effects',
  Color1: 'Primary Color',
  Color2: 'Secondary Color',
  Color3: 'Color 3',
  Color4: 'Color 4',
  Color5: 'Color 5',
  Color6: 'Color 6',
  Brightness: 'Brightness'
};

export class UnderglowMenu extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedCategory: Category.Pattern
    };
  }

  renderCategories() {
    const {selectedCategory} = this.state;
    console.log('selectedCategory', selectedCategory);
    const menu = [Category.Pattern];
    console.log('menu', menu);
    return (
      <div className={styles.categories}>
        {menu.map(label => (
          <div
            onClick={_ => this.setState({selectedCategory: label})}
            key={label}
            className={[
              label === selectedCategory && styles.selected,
              styles.category
            ].join(' ')}
          >
            {label}
          </div>
        ))}
      </div>
    );
  }

  renderColors(colorsNeeded) {
    const { underglowData } = this.props;
    const res = [];
    for (let i = 1; i <= 1; i++) {
      res.push((
        <ColorCategory
          key={`Color ${i}`}
          label={`Color ${i}`}
          color={underglowData[`color${i}`]}
          setColor={(hue, sat) => this.props.updateColor(i, hue, sat)}
        />
      ));
    }
    return res;
  }

  renderSelectedCategory(category) {
    const {underglowData} = this.props;
    const {api} = this.props;

    console.log('underglowData', underglowData);

    if (api && underglowData) {
      const {brightness, rgbMode} = underglowData;
      // TODO: move this info to pattern.js
      const colorsNeededArr = [0, 1, 4, 3, 6, 6, 3, 0, 6, 0, 0];
      const colorsNeeded = colorsNeededArr[rgbMode];
      switch (category) {
        case Category.Pattern:
          return (
            <div>
              <PatternCategory
                rgbMode={rgbMode}
                setRGBMode={mode => this.props.updateRGBMode(mode)}
              />
              <div className={styles.colorControls}>
                {this.renderColors(colorsNeeded)};
              </div>
            </div>
          );
      }
    }
    return null;
  }

  render() {
    return (
      <div className={styles.menu}>
        {this.renderCategories()}
        {this.renderSelectedCategory(this.state.selectedCategory)}
      </div>
    );
  }
}
