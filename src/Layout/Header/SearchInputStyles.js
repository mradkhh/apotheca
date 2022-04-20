import styled from 'styled-components'

export const customStyles = {
  input: (provided) => ({
    ...provided,
    backgroundColor: 'green',
    width: '100%',
    background: '#FFFFFF',
  }),

  control: () => ({
    display: 'flex',
    backgroundColor: 'blue',
    height: 51,
    background: '#FFFFFF',
    borderRadius: 8,
  }),
  indicatorsContainer: () => ({
    display: 'none',
  }),
  container: (provided, state) => ({
    ...provided,
    maxWidth: 685,
    width: '100%',
    background: '#FFFFFF',
    borderRadius: 8,
  }),
  menu: (provided) => ({
    ...provided,
    padding: 0,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
  }),
};
