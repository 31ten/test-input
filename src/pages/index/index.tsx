import "./index.scss";
import Taro, { useRouter, useDidShow } from "@tarojs/taro";
import React, { useState, useEffect } from "react";
import {
  View,
  Form,
  Label,
  Input,
  Button,
  Image,
  Radio,
} from "@tarojs/components";

export default function UserRegister() {
  const [user, setUser] = useState({
    gender: 0,
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [submting, setSubmting] = useState(false);

  function userChange(e: any, filed: string) {
    switch (filed) {
      case "gender":
        setUser({ ...user, gender: e });
        break;
      case "firstName":
        setUser({ ...user, firstName: e.detail.value });
        break;
      case "lastName":
        setUser({ ...user, lastName: e.detail.value });
        break;
      case "phone":
        setUser({ ...user, phone: e.detail.value });
        break;
      default:
        return "";
    }
  }

  async function submitForm() {
    return {
      first_name: user.firstName,
      last_name: user.lastName,
      sex: user.gender,
      phone: user.phone,
    };
  }

  return (
    <View className="page page__register">
      <View className="page__content hasfixed">
        <Form className="register form">
          <View className="register__card">
            <View className="register__title">请填写顾客信息</View>
            <Label className="form__label" for="name">
              称谓*
            </Label>
            <View className="form__name">
              <View className="form__name__col first">
                <Radio
                  checked={user.gender === 0}
                  onClick={() => {
                    userChange(0, "gender");
                  }}
                >
                  先生
                </Radio>
              </View>
              <View className="form__name__col">
                <Radio
                  checked={user.gender === 1}
                  onClick={() => {
                    userChange(1, "gender");
                  }}
                >
                  女士
                </Radio>
              </View>
            </View>
            <View className="form__row">
              <View className="form__col">
                <Label className="form__label" for="lastName">
                  姓氏*
                </Label>
                <Input
                  id="lastName"
                  className="form__input"
                  onChange={(e) => {
                    userChange(e, "lastName");
                  }}
                  value={user.lastName}
                />
              </View>
              <View className="form__col">
                <Label className="form__label" for="firstName">
                  名字*
                </Label>
                <Input
                  id="firstName"
                  className="form__input"
                  onChange={(e) => {
                    userChange(e, "firstName");
                  }}
                  value={user.firstName}
                />
              </View>
            </View>
            <Label className="form__label" for="phone">
              手机号码*
            </Label>
            <View className="form__row">
              <View className="form__col countrycode">
                <Input className="form__input" disabled value="+86" />
              </View>
              <View className="form__col phone">
                <Input
                  id="lastname"
                  className="form__input"
                  onChange={(e) => {
                    userChange(e, "phone");
                  }}
                  value={user.phone}
                  type="number"
                />
              </View>
            </View>
          </View>
          <View className="btn__fixed__inner">
            <View className="btn__row">
              <View className="btn__col">
                <Button onClick={submitForm}>发送给顾客</Button>
              </View>
            </View>
            <View>{JSON.stringify(user)}</View>
          </View>
        </Form>
      </View>
    </View>
  );
}
