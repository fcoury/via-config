import React, {Component} from 'react';
import styles from '../lighting-categories/pattern.css';

// TODO: this is where we want this info, near the effect names
// Ideally, in the same data struture!
// const ColorsNeeded = [0, 1, 2, 2, 2, 0, 0, 0, 0, 0, 1];

// |Mode number symbol           |Additional number  |Description                            |
// |-----------------------------|-------------------|---------------------------------------|
// |`RGBLIGHT_MODE_STATIC_LIGHT` | *None*            |Solid color (this mode is always enabled) |
// |`RGBLIGHT_MODE_BREATHING`    | 0,1,2,3           |Solid color breathing                  |
// |`RGBLIGHT_MODE_RAINBOW_MOOD` | 0,1,2             |Cycling rainbow                        |
// |`RGBLIGHT_MODE_RAINBOW_SWIRL`| 0,1,2,3,4,5       |Swirling rainbow                       |
// |`RGBLIGHT_MODE_SNAKE`        | 0,1,2,3,4,5       |Snake                                  |
// |`RGBLIGHT_MODE_KNIGHT`       | 0,1,2             |Knight                                 |
// |`RGBLIGHT_MODE_CHRISTMAS`    | *None*            |Christmas                              |
// |`RGBLIGHT_MODE_STATIC_GRADIENT`| 0,1,..,9        |Static gradient                        |
// |`RGBLIGHT_MODE_RGB_TEST`     | *None*            |RGB Test                               |
// |`RGBLIGHT_MODE_ALTERNATING`  | *None*            |Alternating                            |

const Pattern = [
  'All Off',
  'Solid Color',
  'Breathing',
  'Cycling Rainbow',
  'Swirling Rainbow',
  'Snake',
  'Knight',
  'Christmas',
  'Gradient',
  'RGB Test',
  'Alternating',
];

export class PatternCategory extends Component {
  updatePattern(patternNum) {
    this.props.setRGBMode(patternNum);
  }

  render() {
    const {rgbMode} = this.props;
    return (
      <div className={styles.patternContainer}>
        {Pattern.map((p, idx) => (
          <div
            className={[
              rgbMode === idx && styles.selected,
              styles.pattern
            ].join(' ')}
            onClick={() => this.updatePattern(idx)}
            key={idx}
          >
            {p}
          </div>
        ))}
      </div>
    );
  }
}
