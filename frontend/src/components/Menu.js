import React, { PureComponent } from 'react';
import { List, ListItem, makeSelectable } from 'material-ui/List';
const SelectableList = makeSelectable(List);

const _style = {
    
};

class Menu extends PureComponent {
    state = {
        selectedCategory: 'all'
    }
    selectCategory = (event, value) => {
        this.setState({ selectedCategory: value}, () => {
            this.props.selectCategory(value);
        });
    }

    render() {
        const { categories, selectCategory, style } = this.props;
        const items = categories.map((name, index) => {
            const camelCaseName = name[0].toUpperCase() + name.substring(1);
            return <ListItem primaryText={camelCaseName} key={index} value={name} />
        });
        return <SelectableList
                    value={this.state.selectedCategory} 
                    onChange={this.selectCategory} 
                    style={style} >
            {items}
        </SelectableList>
    }
}

export default Menu;