import { useState } from 'react';
import Form from './Form';
import List from './List';
import Control from './Control';

function App() {
  const [list, setList] = useState([]);
  function addItem(item) {
    setList([...list, { text: item, checked: false, done: false }]);
  }
  function deleteItem(item, index) {
    setList(list.filter((it, ind) => it.text !== item || ind !== index));
  }
  function setChecked(checked, index) {
    setList(
      list.map((it, ind) => {
        if (ind === index) {
          return { ...it, checked: checked };
        }
        return it;
      })
    );
  }
  function handleCheckAll() {
    setList(
      list.map((it) => {
        return { ...it, checked: true };
      })
    );
  }
  function handleUnCheckAll() {
    setList(
      list.map((it) => {
        return { ...it, checked: false };
      })
    );
  }
  let someCheck = list.some((item) => item.checked);
  return (
    <div>
      <Form onAddItem={addItem} />
      <div>
        <button onClick={handleCheckAll}>Выбрать все</button>
        {someCheck && (
          <button onClick={handleUnCheckAll}>Очистить выбор</button>
        )}
      </div>
      {someCheck && <Control setList={setList} />}
      <List
        items={list}
        onDeleteItem={deleteItem}
        setChecked={setChecked}
        setList={setList}
      />
    </div>
  );
}

export default App;
/*
** Создаем пустое поле и кнопку для добавления в TODO лист.

** При нажатии на кнопку добавлем новый элемент задания в общий массив дел.

** Все задания выводится списком, каждое задание можно перечеркнуть как выполненое или полностью удалить (можно две кнопки вывести)

** После того как сделаем функционал как в примере, добавьте возможность массовых действий (добавляем чекбокс рядом с каждым заданием) и если хоть один элемент выбран, то появляется две кнопки: "Сделать выполненным" и "удалить".

** Соответсвенно мы можем выбрать как один, так и много чекбоксов и все отмеченные удалить или сделать выполненными.

** Далее добавить кнопку "Выбрать все", при клике на нее мы проставлем на все элементы, что они выбраны

** Добавить кнопку "Очистить выбор" - она снимает все чекбосы (Данныя кнопка становится видна, если хотябы один чекбокс выбран).*/
