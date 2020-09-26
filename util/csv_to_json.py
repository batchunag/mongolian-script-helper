# CSV to JSON converter
import csv
import json
import re

# Input & output file names
input_csv_fname = "toli.query.mn_20150426132043 2.csv"
output_json_fname = "mongolian_dict.json"

# HTML tag remover function
tag_remover = re.compile(r'<[^>]+>')
def remove_tags(text):
    return tag_remover.sub('', text)

# ... open and process CSV file
line_list_raw = []
text_file = open(input_csv_fname, 'r')
for line in text_file:
    line_list_raw.append(line)

line_list_clean = []
for line in line_list_raw:
    ind1 = line.find('<')
    ind2 = line.rfind('>')
    split_line = []
    split_line.append(line[0:ind1].strip())
    split_line.append(remove_tags(line[ind1:ind2+1]).strip().replace("&quot;","'"))
    split_line.append(line[ind2+1:].strip())
    line_list_clean.append(split_line)
line_list_raw = []

# ... create Python dictionary containing the data and then convert that to JSON
mongolian_dict = {'Dict' : []}
for sline in line_list_clean:
    item = {}
    tmp = sline[0].split(' ')
    if len(tmp)>1:
        tmp = tmp[0] + " (" + tmp[1] + ")" 
    else:
        tmp = tmp[0]
    item['Cyrillic'] = tmp
    item['Description'] = sline[1]
    tmp = sline[2].split('\t')
    item['Written'] = tmp[0]
    if len(tmp)>1:
        item['Phonetic transcription'] = tmp[1]
    else:
        item['Phonetic transcription'] = ''
    mongolian_dict['Dict'].append(item)

with open(output_json_fname, 'w', encoding='utf-8') as file:
    json.dump(mongolian_dict, file, ensure_ascii=False, indent=4)

