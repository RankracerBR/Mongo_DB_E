'''Libs'''
import pandas as pd

'''Functions'''
def generate_columns(db):
    columns = ["pacienteid","classe"]
    exames_column = [f"exame{i}" for i in range ((db.shape[1]-2))]
    columns.extend(exames_column)
    print(columns)
    return columns


path = "Pandas_Sklearn/exames.csv"

data_base = pd.read_csv(path)
print(data_base)
print('\n')

print(data_base.head(10))
print('\n')

print(data_base.shape)
print('\n')

columns = generate_columns(data_base)
print(len(columns))
print('\n')

data_base_v2 = pd.DataFrame(data_base.to_numpy(), columns = columns)
data_base_v2.head(10)

print(data_base.isnull())

print(data_base_v2.isnull().sum())
