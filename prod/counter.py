import json
import boto3
from boto3.dynamodb.conditions import Key,Attr

def lambda_handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('muckitymuckresumecounter')
    #response = table.query(KeyConditionExpression='Site = :Site', ExpressionAttributeValues={':Site': 0})
    response = table.get_item(Key={'Site' :0})
    # 2 filter_exp = Key('Site').eq(1)
    # 2 response = table.query(KeyConditionExpression=filter_exp)

    item = response['Item']
    visits = item['Visits']
    visits = int(visits)
    
    #return response['Item']
    #return response
    update = table.update_item(Key={'Site' : 0}, UpdateExpression="set Visits = :val1", ExpressionAttributeValues={':val1': visits + 1})
    
    #return(visits)
    return{

        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,x-requested-with',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },'body': json.dumps(visits)
    };

     
    
if __name__ == '__main__':
    site = lambda_handler(0)
    
    
# def lambda_handler(event, context):
#     # TODO implement
#     dynamodb = boto3.resource('dynamodb')

#     table = dynamodb.Table('muckitymuckresumecounter')

#     response = table.get_item(Key={'Site':0})
   
#     #print(response)
    
#     item = response['Item']
#     print(item)
    
    
    #return item
    #print(table.creation_date_time)
    
    #return {
    #    'statusCode': 200,
    #    'body': json.dumps('Hello from Lambda!'),
    #}