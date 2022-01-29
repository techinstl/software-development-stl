# %%
import pandas as pd

# %%
classes = pd.read_csv('class_registration.csv')
classes.drop(['register_time', 'is_paid', 'external_id'], axis=1, inplace=True)

# %%
classes.head()

# %%
students = pd.read_csv('student.csv')
students.drop(['family_id','cn_name','email','relation', 'birthday', 'external_id'], axis=1, inplace=True)

# %%
students.head()

# %%
studentclasses = classes.join(students.set_index('id'), on='student_id')

# %%
studentclasses.head()

# %%
df = studentclasses.groupby('en_name')['en_name'].count()

# %%
df

# %%
df.to_csv('output.csv')

# %%
pd.read_csv('output.csv')

# %%



